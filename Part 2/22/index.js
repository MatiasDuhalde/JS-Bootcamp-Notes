const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events
} = Matter;

const width = window.innerWidth;
const height = window.innerHeight;
const segmentWidth = 10;
const borderWidth = 5;

const horizontalCells = 20;
const verticalCells = 10;

const horizontalUnitLength = width / horizontalCells;
const verticalUnitLength = height / verticalCells;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls

const walls = [
    Bodies.rectangle(width / 2, 0, width, borderWidth * 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, borderWidth * 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, borderWidth * 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, borderWidth * 2, height, { isStatic: true })
];
World.add(world, walls);


// Maze generation

const shuffle = arr => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter--;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

const grid = Array(verticalCells).fill(null).map(() => {
    return Array(horizontalCells).fill(false)
});
const verticals = Array(verticalCells).fill(null).map(() => {
    return Array(horizontalCells - 1).fill(false)
});
const horizontals = Array(verticalCells - 1).fill(null).map(() => {
    return Array(horizontalCells).fill(false)
});

const startRow = Math.floor(Math.random() * verticalCells);
const startCol = Math.floor(Math.random() * horizontalCells);

const stepThroughCell = (row, col) => {
    if (grid[row][col]) {
        return;
    }
    grid[row][col] = true;
    const neighbors = shuffle([
        [row - 1, col, 'up'],
        [row, col - 1, 'left'],
        [row + 1, col, 'down'],
        [row, col + 1, 'right']
    ]);

    for (let neighbor of neighbors) {
        const [nextRow, nextCol, direction] = neighbor;
        if (nextRow < 0 || nextRow >= verticalCells || nextCol < 0 || nextCol >= horizontalCells) {
            continue;
        }
        if (grid[nextRow][nextCol]) {
            continue;
        }

        if (direction === 'up') {
            horizontals[nextRow][nextCol] = true
        } else if (direction === 'left') {
            verticals[nextRow][nextCol] = true
        } else if (direction === 'down') {
            horizontals[nextRow - 1][nextCol] = true
        } else if (direction === 'right') {
            verticals[nextRow][nextCol - 1] = true
        }
        stepThroughCell(nextRow, nextCol)
    }
}

stepThroughCell(startRow, startCol);

horizontals.forEach((row, i) => {
    row.forEach((cell, j) => {
        if (cell) {
            return;
        }
        // x, y, width, height
        const wall = Bodies.rectangle(
            (j + 0.5) * horizontalUnitLength,
            (i + 1) * verticalUnitLength,
            horizontalUnitLength,
            segmentWidth,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    });
});
verticals.forEach((row, i) => {
    row.forEach((cell, j) => {
        if (cell) {
            return;
        }
        // x, y, width, height
        const wall = Bodies.rectangle(
            (j + 1) * horizontalUnitLength,
            (i + 0.5) * verticalUnitLength,
            segmentWidth,
            verticalUnitLength,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    });
});

// Goal

const goal = Bodies.rectangle(
    width - horizontalUnitLength * 0.5,
    height - verticalUnitLength * 0.5,
    horizontalUnitLength * 0.5,
    verticalUnitLength * 0.5,
    {
        label: 'goal',
        isStatic: true,
        render: {
            fillStyle: 'green'
        }
    }
);
World.add(world, goal)

// Ball

const ball = Bodies.circle(
    horizontalUnitLength * 0.5,
    verticalUnitLength * 0.5,
    horizontalUnitLength > verticalUnitLength ? verticalUnitLength * 0.25 : horizontalUnitLength * 0.25,
    {
        label: 'ball',
        render: {
            fillStyle: 'magenta'
        }
    }
);
World.add(world, ball)

document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity;
    if (event.code === "KeyW") {
        Body.setVelocity(ball, { x, y: -5 });
    }
    if (event.code === "KeyA") {
        Body.setVelocity(ball, { x: -5, y });
    }
    if (event.code === "KeyS") {
        Body.setVelocity(ball, { x, y: 5 });
    }
    if (event.code === "KeyD") {
        Body.setVelocity(ball, { x: 5, y });
    }
});

document.addEventListener('keyup', event => {
    const { x, y } = ball.velocity;
    if (event.code === "KeyW") {
        Body.setVelocity(ball, { x, y: 0 })
    }
    if (event.code === "KeyA") {
        Body.setVelocity(ball, { x: 0, y })
    }
    if (event.code === "KeyS") {
        Body.setVelocity(ball, { x, y: 0 })
    }
    if (event.code === "KeyD") {
        Body.setVelocity(ball, { x: 0, y })
    }
});

// Win Condition
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
        const labels = ['ball', 'goal'];
        if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            document.querySelector('.winner').classList.remove('hidden');

            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false);
                }
            });
        }
    });
});