import React, { useEffect, useState } from "react";

import { Title } from "../atoms/Title";

export const NotFound = () => {
    return (
        <div className="app">
            <main>
                <Title title={"NotFound"} isActive={true} />
            </main>
        </div>
    );
};