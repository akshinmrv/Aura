import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

import { Sidebar } from "@/components/layout/Sidebar";

interface AppShellProps {
    children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-void selection:bg-neon-indigo/30 text-slate-200">
            {/* Background Layer (3D Canvas) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Scene />
            </div>

            {/* UI Layer */}
            <div className="relative z-10 flex h-screen">
                {/* Floating Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col relative overflow-hidden md:pl-28">

                    {/* Header */}
                    <header className="h-16 flex items-center px-8 justify-between">
                        <div>
                            {/* Breadcrumbs or Title could go here */}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-right hidden md:block">
                                <div className="text-white font-medium">Akshin</div>
                                <div className="text-neon-indigo text-xs">Commander</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-neon-indigo/20 border border-neon-indigo/50 shrink-0" />
                        </div>
                    </header>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 relative no-scrollbar">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};
