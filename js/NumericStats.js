class NumericStats {
    min;
    max;
    average;

    constructor(values){
        const isEmpty = values.length == 0;
        if(isEmpty)
            this.average = 0;
        else
            this.average = Number(values[0]);
        this.min = this.average;
        this.max = this.average;
        if(isEmpty)
            return;
        for (let i = 1; i < values.length; i++) {
            const num = Number(values[i]);
            this.average += num;
            this.min = Math.min(this.min, num);
            this.max = Math.max(this.max, num);
        }
        this.average /= values.length;
    }

    getHTMLTable(title){
        const table = document.createElement('table');
        table.innerHTML = `
        <tr><th colspan="3">${title}</th></tr>
        <tr><td>${language.numericStatsTitle1}</td><td>Max</td><td>Min</td></tr>
        <tr>
        <td>${this.average.toFixed(2)}</td>
        <td>${this.max}</td>
        <td>${this.min}</td>
        </tr>`;
        return table
    }
}
