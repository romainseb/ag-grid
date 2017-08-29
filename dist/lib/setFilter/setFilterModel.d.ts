// ag-grid-enterprise v13.0.1
import { ColDef } from "ag-grid/main";
export declare class SetFilterModel {
    private colDef;
    private filterParams;
    private rowModel;
    private valueGetter;
    private allUniqueValues;
    private availableUniqueValues;
    private displayedValues;
    private miniFilter;
    private selectedValuesCount;
    private selectedValuesMap;
    private suppressSorting;
    private formatter;
    private showingAvailableOnly;
    private usingProvidedSet;
    private doesRowPassOtherFilters;
    constructor(colDef: ColDef, rowModel: any, valueGetter: any, doesRowPassOtherFilters: any, suppressSorting: boolean);
    refreshAfterNewRowsLoaded(keepSelection: any, isSelectAll: boolean): void;
    refreshValues(valuesToUse: string[], keepSelection: any, isSelectAll: boolean): void;
    private refreshSelection(keepSelection, isSelectAll);
    refreshAfterAnyFilterChanged(): void;
    private createAllUniqueValues();
    setUsingProvidedSet(value: boolean): void;
    private setValues(valuesToUse);
    private extractValuesToUse();
    private createAvailableUniqueValues();
    private sortValues(values);
    private getUniqueValues(filterOutNotAvailable);
    setMiniFilter(newMiniFilter: any): boolean;
    getMiniFilter(): any;
    private processMiniFilter();
    getDisplayedValueCount(): number;
    getDisplayedValue(index: any): any;
    selectEverything(): void;
    private selectOn(toSelectOn);
    private valueToKey(key);
    private keyToValue(value);
    isFilterActive(): boolean;
    selectNothing(): void;
    getUniqueValueCount(): number;
    getUniqueValue(index: any): any;
    unselectValue(value: any): void;
    selectValue(value: any): void;
    isValueSelected(value: any): boolean;
    isEverythingSelected(): boolean;
    isNothingSelected(): boolean;
    getModel(): string[];
    setModel(model: string[], isSelectAll?: boolean): void;
}
