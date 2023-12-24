export function attackPanel({special}) {
const arrAttackPanel = [];
    for (let element of special) {
        const { id, name, icon, description = 'Описание недоступно' } = element;
        arrAttackPanel.push({ id, name, icon, description });
    }

    return arrAttackPanel;
} 