import { createFileRoute, CreateFileRoute } from "@tanstack/react-router";
import { WebWorkerDemo } from "../../components/WebWorker/WebWorkerDemo";

export const Route = createFileRoute('/dashboard/WebWorkDemo')({
    component: RouteComponent
});

function RouteComponent() {
  return <WebWorkerDemo counter={1e9}/>
}