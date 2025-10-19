import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [vis, setVis] = useState<boolean>(false); //should it be shown Y/N

    function toggleAnswer(): void {
        setVis(!vis);
    } //changes vis status

    return (
        //makes button linked to that fx and only works if its 42
        <div>
            <Button onClick={toggleAnswer}>Reveal Answer </Button>

            {vis && <p>42</p>}
        </div>
    );
}
