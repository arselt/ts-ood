export interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnecter(name: string): boolean;
}

// const driver: Driver = {
//     database: '',
//     password: '',
//     port: 20,
// }

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private host: number,
    ) {}

    connect(): void {
        // code
    }
    disconnect(): void {
        // code
    }
    isConnecter(name: string): boolean {
        return true;
    }
}

class OracleDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
    ) {}

    connect(): void {
        // code
    }
    disconnect(): void {
        // code
    }
    isConnecter(name: string): boolean {
        return true;
    }
}
