export interface Binance {
    a: [][],
    b: [][],
    e: string,
    E: string,
    s: string,
    U: string,
    u: string,
}

export interface ChartProps {
    bidList: Binance[],
}

export interface BidProps {
    labels?  : number[];
    datasets?: DataSet []
}

export interface DataSet {
    label          : string;
    data           : number[];
    fill           : boolean;
    backgroundColor: string;
    borderColor    : string;
}
