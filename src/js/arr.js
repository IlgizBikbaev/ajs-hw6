export function objectSorting(objX, arrX) {
    const copyObj = { ...objX };
    const mainArr = [];

    arrX.forEach((el) => {
        mainArr.push({ key: el, value: copyObj[el] });
        delete copyObj[el];
    });

    const objN = Object.entries(copyObj);

    const otherArr = Array.from(objN, n => ({ key: n[0], value: n[1] }));
    otherArr.sort((a, b) => a.key > b.key ? 1 : -1);
    return [...mainArr, ...otherArr];
}