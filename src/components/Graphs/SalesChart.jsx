'use strict';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { AgChartsReact } from 'ag-charts-react';



function getData() {
    return [
        { asset: 'Stocks', amount: 60000 },
        { asset: 'Bonds', amount: 40000 },
        { asset: 'Cash', amount: 7000 },
        { asset: 'Real Estate', amount: 5000 },
        { asset: 'Commodities', amount: 3000 },
    ];
}




export const SalesChart= () => {
    const [options, setOptions] = useState({
        data: getData(),
        title: {
            text: 'Portfolio Composition',
        },
        series: [
            {
                type: 'pie',
                angleKey: 'amount',
                legendItemKey: 'asset',
            },
        ],
    });

    

    return <AgChartsReact options={options} />;
};

