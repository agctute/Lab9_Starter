window.addEventListener('DOMContentLoaded', init);

function init() {
    const log = document.querySelector(".log");
    log.addEventListener('click', () => { 
     console.log("this triggered"); 
    })
    document.querySelector(".error").addEventListener('click', () => { 
     console.error("this error triggered");
    })
    document.querySelector(".count").addEventListener('click', () => { 
     console.count("count this");
    })
    document.querySelector(".warn").addEventListener('click', () => { 
     console.warn("warning: warning triggered");
    })
    document.querySelector(".assert").addEventListener('click', () => { 
     console.assert(false, ["i just wrote false so this assertion should fail"]);
    })
    document.querySelector(".clear").addEventListener('click', () => { 
     console.clear();
    })
    document.querySelector(".dir").addEventListener('click', () => { 
     console.dir(document.head);
    })
    document.querySelector(".dirxml").addEventListener('click', () => { 
     console.dirxml(document);
    })
    document.querySelector(".start").addEventListener('click', () => { 
     console.group();
    })
    document.querySelector(".end").addEventListener('click', () => { 
     console.groupEnd(); 
    })
    document.querySelector(".table").addEventListener('click', () => { 
        const peeps = ['peep1', 'peep2', 'peep3'];
     console.table(peeps);
    })
    document.querySelector(".timer-start").addEventListener('click', () => { 
     console.time('time');
    })
    document.querySelector(".timer-end").addEventListener('click', () => { 
     console.timeEnd('time')
    })
    document.querySelector(".trace").addEventListener('click', () => { 
     console.trace();
    })

    document.querySelector(".global-error").addEventListener('click', () => { 
        window.onerror = function (msg, url, lineNo, columnNo, error) {
            console.log("a global error as been triggered")
            return false;
        }
        throw new PoggerError("POGGERS");
        window.onerror = () => {}
    })
}

class PoggerError extends Error {
    constructor(message) {
        super(message);
        this.name = "PoggerError";
    }
}

try {
    throw PoggerError("poggers!");
} catch (err) {
    console.log("error occurred");
} finally {
    console.log('poggers');
}
