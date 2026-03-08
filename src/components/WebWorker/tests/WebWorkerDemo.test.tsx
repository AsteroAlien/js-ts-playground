import React from 'react';
import { describe, it, vi, expect } from 'vitest';
import { WebWorkerDemo } from '../WebWorkerDemo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

const mockPostMessage = vi.fn();
const mockTerminate = vi.fn();

vi.stubGlobal('Worker', class {
    onmessage: ((e: MessageEvent) => void) | null = null;
    postMessage = mockPostMessage;
    terminate = mockTerminate;
});

describe("Testing UI interaction and results", () => {

    it("WebWorkDemo - renders the default welcome greeting", () => {
        render(<WebWorkerDemo counter={0}/>);
        expect(screen.getByText("Web Worker Demo")).toBeInTheDocument();
        expect(screen.getByText("This is a demo of a web worker. Click the button to see the worker in action.")).toBeInTheDocument();
    });

});