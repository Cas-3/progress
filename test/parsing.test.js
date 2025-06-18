"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const assert = __importStar(require("assert"));
const fs_1 = require("fs");
const path_1 = require("path");
const parsing_1 = require("../src/parsing");
(0, mocha_1.describe)("parseLine", () => {
    (0, mocha_1.it)("should parse Entries out of USPSA table lines", () => {
        const input1 = "6/01/25 	09-10 	Custer Sportsmens Club 	Y 	95.0488 	11.2840 	6/10/25 	Stage Score";
        const expectedOutput = {
            date: new Date("6/01/25"),
            classifierNumber: "09-10",
            club: "Custer Sportsmens Club",
            flag: "Y",
            percent: 95.0488,
            hitFactor: 11.284
        };
        assert.deepEqual((0, parsing_1.parseLine)(input1), expectedOutput);
    });
});
(0, mocha_1.describe)("parseTextInput", () => {
    (0, mocha_1.it)("should ignore headers and parse a table", () => {
        const expectedOutput = [
            {
                classifierNumber: "09-10",
                club: "Custer Sportsmens Club",
                date: new Date("06/01/25"),
                flag: "Y",
                percent: 95.0488,
                hitFactor: 11.284
            },
            {
                classifierNumber: "19-02",
                club: "Custer Sportsmens Club",
                date: new Date("11/03/24"),
                flag: "Y",
                percent: 99.0984,
                hitFactor: 10.0346
            },
            {
                classifierNumber: "99-13",
                club: "Custer Sportsmens Club",
                date: new Date("09/01/24"),
                flag: "F",
                percent: 86.858,
                hitFactor: 8.3051
            },
            {
                classifierNumber: "20-01",
                club: "Custer Sportsmens Club",
                date: new Date("07/07/24"),
                flag: "Y",
                percent: 97.4605,
                hitFactor: 8.5546
            },
            {
                classifierNumber: "18-03",
                club: "Custer Sportsmens Club",
                date: new Date("06/02/24"),
                flag: "F",
                percent: 87.4095,
                hitFactor: 6.7981
            },
            {
                classifierNumber: "23-01",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "Y",
                percent: 100,
                hitFactor: 10.325
            },
            {
                classifierNumber: "99-53",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "Y",
                percent: 95.5208,
                hitFactor: 6.9948
            },
            {
                classifierNumber: "99-28",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "Y",
                percent: 92.7446,
                hitFactor: 10.087
            },
            {
                classifierNumber: "22-07",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "E",
                percent: 91.7118,
                hitFactor: 8.9474
            },
            {
                classifierNumber: "23-02",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "E",
                percent: 91.8159,
                hitFactor: 9.3913
            },
            {
                classifierNumber: "99-10",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "E",
                percent: 88.736,
                hitFactor: 9.1525
            },
            {
                classifierNumber: "09-08",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "E",
                percent: 87.4962,
                hitFactor: 8.0717
            },
            {
                classifierNumber: "99-14",
                club: "Custer Sportsmens Club",
                date: new Date("03/03/24"),
                flag: "E",
                percent: 67.0886,
                hitFactor: 53
            },
            {
                classifierNumber: "22-01",
                club: "WAC Gulf Coast Lead Slingers",
                date: new Date("01/26/24"),
                flag: "E",
                percent: 94.0125,
                hitFactor: 8.0392
            },
            {
                classifierNumber: "06-10",
                club: "Custer Sportsmens Club",
                date: new Date("01/07/24"),
                flag: "E",
                percent: 71.5424,
                hitFactor: 7.4442
            },
            {
                classifierNumber: "99-42",
                club: "Custer Sportsmens Club",
                date: new Date("12/03/23"),
                flag: "E",
                percent: 83.4255,
                hitFactor: 8.1123
            },
            {
                classifierNumber: "08-01",
                club: "Custer Sportsmens Club",
                date: new Date("08/06/23"),
                flag: "E",
                percent: 85.3823,
                hitFactor: 4.8831
            },
            {
                classifierNumber: "99-24",
                club: "Marysville Rifle Club Practical Shooters",
                date: new Date("07/15/23"),
                flag: "E",
                percent: 75.4203,
                hitFactor: 8.8189
            },
            {
                classifierNumber: "18-06",
                club: "Custer Sportsmens Club",
                date: new Date("07/02/23"),
                flag: "E",
                percent: 62.1615,
                hitFactor: 3.7599
            },
            {
                classifierNumber: "06-10",
                club: "Custer Sportsmens Club",
                date: new Date("06/04/23"),
                flag: "E",
                percent: 97.0755,
                hitFactor: 10.101
            },
            {
                classifierNumber: "03-08",
                club: "Custer Sportsmens Club",
                date: new Date("05/07/23"),
                flag: "E",
                percent: 72.5517,
                hitFactor: 7.4972
            }
        ];
        assert.deepEqual(expectedOutput, (0, parsing_1.parseTextInput)((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "data", "record.txt"), { encoding: "utf-8" })));
    });
});
