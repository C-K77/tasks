import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    //set so not auto win as 1&2
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    //separate roll functions for both dies
    function rollLeft(): void {
        setLeftDie(d6());
    }
    function rollRight(): void {
        setRightDie(d6());
    }

    //statement conditions
    const same = leftDie === rightDie;
    const snake = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <p>
                Left Die: <span data-testid="left-die">{leftDie}</span> | Right
                Die: <span data-testid="right-die">{rightDie}</span>
            </p>

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            <p>
                {snake ?
                    "Lose"
                : same ?
                    "Win"
                :   "keep rolling"}
            </p>
        </div>
    );
}
