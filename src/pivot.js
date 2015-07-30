// pivot-crossfilter
// A simple (and highly limited) pivot function for crossfilter
// Copyright 2015 Peter Moresi

import crossfilter from 'crossfilter';

export function pivot(facts, row, col) {
    let rowDim = facts.dimension( (d) => { return d[row]; } ),
        colDim = facts.dimension( (d) => { return d[col]; } ),
        rowColDim = facts.dimension( (d) => { return `${d[row]}|${d[col]}`; } ),
        rows = rowDim.group().all(),
        rowMap = {},
        cols = colDim.group().all(),
        colMap = {},
        product = rowColDim.group().all(),
        productMap = {},
        out = {};

    var m = ((rows, map) => {
        rows.forEach( (r) => {
            map[r.key] = r.value;
        });
    });

    m(rows, rowMap);
    m(cols, colMap);
    m(product, productMap);
    
    out[`${row}`] = rowMap;
    out[`${col}`] = colMap;
    out[`${row}|${col}`] = productMap;
 
    return out;
}
