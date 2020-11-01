
export const language = {
    URNFIELD: 'urnfield',
    ROMAN: 'roman',
    ARABIC: 'arabic'
}

export const convert = (range = {start: 1, end: 10}, language = 'arabic') => {
    switch(language) {
        case 'urnfield':
            return convertToUrnfield(range);
        default:
            return convertToArabic(range);
           
    }
}

const convertToUrnfield = range => {
    let current = [];
    for (let i = range.start; i <= range.end; i++) {
         current.push(aracbicCharacterToUrnfield(i));
    }
    return current.join(', ');
}

const aracbicCharacterToUrnfield = (character) => {
    let fives = [];
    let other;
    while (character >= 5) {
        fives.push('\\');
        character = character - 5;
    }
    switch (character) {
        case 4:
            other =  '////';
            break;
        case 3:
            other =  '///';
            break;
        case 2:
            other = '//';
            break
        case 1:
            other = '/';
            break;
        default:
            other = '';
    }
    const result = other + '' + fives.join('');
    return result;
}

const convertToArabic = range => {
    let result = [];
    for (let i = range.start; i <= range.end; i++) {
        result.push(i);
    }
    return result.join(', ');
}