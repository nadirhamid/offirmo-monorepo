import { SimpleLogger, JSConsoleLogger, SyslogLogger, Log4jLogger, NpmLogger, AngularJSLogger, BunyanLogger, CompatibleLogger } from './types';
declare const simpleLoggerToConsole: SimpleLogger;
declare const consoleLoggerToConsole: JSConsoleLogger;
declare const syslogLoggerToConsole: SyslogLogger;
declare const log4jLoggerToConsole: Log4jLogger;
declare const serverLoggerToConsole: Log4jLogger;
declare const npmLoggerToConsole: NpmLogger;
declare const angularJSLoggerToConsole: AngularJSLogger;
declare const bunyanLoggerToConsole: BunyanLogger;
declare const compatibleLoggerToConsole: CompatibleLogger;
export { simpleLoggerToConsole, consoleLoggerToConsole, syslogLoggerToConsole, log4jLoggerToConsole, serverLoggerToConsole, npmLoggerToConsole, angularJSLoggerToConsole, bunyanLoggerToConsole, compatibleLoggerToConsole };
