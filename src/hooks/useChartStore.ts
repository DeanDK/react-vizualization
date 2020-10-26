import React from "react";

export const ChartStoreContext = React.createContext(null)

export const useChartStore = () => {
    const store = React.useContext(ChartStoreContext)

    if (!store) {
        throw new Error('useChartStore must be used within a ChartStoreProvider')
    }

    return store;
}