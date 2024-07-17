export class Crash {
  constructor(message: string) {
    console.error('Error: ' + message);
    process.exit(1);
  }
}
