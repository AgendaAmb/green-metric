// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export function Providers({ children }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <CacheProvider>
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
        </DndProvider>
    );
}
