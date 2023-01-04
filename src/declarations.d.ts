declare module "@gfa/gfa-infra" {
  export class EventBus {
    private getNextId(): number
    public static get instance(): EventBus
    public dispatch<T>(event: string, arg?: T): void
    public register(event: string, callback: Function): { unregister: () => void; }
  }
}
