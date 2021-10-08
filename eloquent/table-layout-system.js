function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeight())
        }, 0)
    });
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth())
        }, 0)
    })
}

function drawTable(rows) {
    const heights = rowHeights(rows);
    const widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo]
        }).join(" ")
    }

    function drawRow(row, rowNum) {
        const blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum])
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo)
        }).join('\n')
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    this.text = text.split("\n")
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0)
}

TextCell.prototype.minHeight = function() {
    return this.text.length;
}

TextCell.prototype.draw = function(width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(line + repeat(" " , width - line.length))
    }
    return result;
}

// let rows = [];
// for (let i = 0; i < 5; i++) {
//     let row = [];
//     for (let j = 0; j < 5; j++) {
//         if ((j+i) % 2 === 0) {
//             row.push(new TextCell("##"));
//         } else {
//             row.push(new TextCell("  "));
//         }
//     }
//     rows.push(row)
// }
// console.log(drawTable(rows))

let MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania", address: "Valencia City"},
    {name: "Everest", height: 8848, country: "Nepal", address: "Malaybalay City"},
    {name: "Mount Fuji", height: 3776, country: "Japan", address: "Maramag City"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France", address: "DonCarlos City"},
    {name: "Vaalserberg", height: 323, country: "Netherlands", address: "Quezon City"},
    {name: "Denali", height: 6168, country: "United States", address: "Zampo City"},
    {name: "Popocatepetl", height: 5465, country: "Mexico", address: "Valencia City"}
];

if (typeof module != "undefined" && module.exports)
    module.exports = MOUNTAINS;

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
}

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
}

UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height-1).concat([repeat("-", width)]);
}

function dataTable(data) {
    let keys = Object.keys(data[0]);
    let headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    let body = data.map(function(row) {
        return keys.map(function(name) {
            let value = row[name];
            if (typeof value === "number")
                return new RTextCell(String(value))
            else
                return new TextCell(String(value))
        })
    })
    return [headers].concat(body)
}

function RTextCell(text) {
    TextCell.call(this, text)
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    let result = [];
    for(let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
}

console.log(drawTable(dataTable(MOUNTAINS)));
console.log(new RTextCell("A") instanceof RTextCell);
console.log(new RTextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1,2,3,4] instanceof Array);

const pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log('Ignoring attempt to set height to', value)
    }
}
// console.log(pile.height);
// pile.height = 100;