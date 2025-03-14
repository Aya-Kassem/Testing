// logger.js
export function logMessage(message, logFn = console.log) {
  logFn(`[${new Date().toISOString()}] ${message}`);
}
