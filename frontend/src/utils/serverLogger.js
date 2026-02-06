// Dev helper: forward client console messages to the backend so they appear in your terminal
// Usage:
// 1) import { log, info, warn, error, enableServerConsole } from './serverLogger'
// 2) call the functions instead of console.log OR call enableServerConsole() in dev to patch console globally

const SERVER_LOG_URL = 'http://localhost:10116/client-log';

function sendToServer(level, args) {
  try {
    // make the call non-blocking and ignore failures (dev-only)
    fetch(SERVER_LOG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, args }),
    }).catch(() => {});
  } catch (e) {
    // ignore network errors in dev
  }
}

export function log(...args) {
  console.log(...args);
  sendToServer('log', args);
}

export function info(...args) {
  console.info(...args);
  sendToServer('info', args);
}

export function warn(...args) {
  console.warn(...args);
  sendToServer('warn', args);
}

export function error(...args) {
  console.error(...args);
  sendToServer('error', args);
}

// Monkey-patch global console (DEV ONLY):
export function enableServerConsole() {
  if (typeof window === 'undefined') return;
  const orig = {
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  };

  console.log = (...args) => {
    orig.log(...args);
    sendToServer('log', args);
  };
  console.info = (...args) => {
    orig.info(...args);
    sendToServer('info', args);
  };
  console.warn = (...args) => {
    orig.warn(...args);
    sendToServer('warn', args);
  };
  console.error = (...args) => {
    orig.error(...args);
    sendToServer('error', args);
  };

  return () => {
    // call to restore original console
    Object.assign(console, orig);
  };
}
