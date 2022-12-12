const analyseArray = require ('../analyse-array');

describe ('analyseArray', () => {
    let consoleSpy = null;
    beforeEach(function () {
        consoleSpy = jest.spyOn(console, 'log');
      });
    afterEach(function () {
        consoleSpy.mockRestore();
      });
    
    test('Does not run console log if provided empty array', () => {
        analyseArray("", []);
        expect(consoleSpy).toHaveBeenCalledTimes(0);
    })
    test('Runs console log once if provided a single-element array', () => {
        analyseArray("", ['hello']);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })
    test('Console log runs same amount of times as array length for flat array', () => {
        analyseArray("", [1, 2, 3]);
        expect(consoleSpy).toHaveBeenCalledTimes(3);
    })
    test('Console log integrates string name and array index for flat array', () => {
        analyseArray("LogOf", [1, 2, 3]);
        expect(consoleSpy).toHaveBeenCalledWith('LogOf.0: 1');
        expect(consoleSpy).toHaveBeenCalledWith('LogOf.2: 3');
    })
    // Now need to access nested arrays
    // test('Console log string name, indices and values for nested arrays', () => {
    //     analyseArray("LogOf", [1, 2, 3, [4]]);
    //     expect(consoleSpy).toHaveBeenCalledWith('LogOf.0.0: 4');
    // })
})