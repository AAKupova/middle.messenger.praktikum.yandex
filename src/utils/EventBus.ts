/* eslint-disable no-unused-vars */
export class EventBus {
  listeners: Record<string, Array<(data?: any) => void>>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (data?: any) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (data?: any) => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: (data?: any) => void) => {
        return listener !== callback;
      }
    );
  }

  emit(event:string, data?: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: (data?: any) => void) {
      listener(data);
    });
  }
}