interface Driver {
    name?: string;
    surname?: string;
    nationality?: string;
    birthdate?: Date | string;
    description?: string;
    teams?: string[] | string;
}

export const validate = ({ name, surname, nationality, birthdate, description, teams }: Driver, setError: Function): void => {
    const error: Driver = {}

    if (!name || !name.trim()) error.name = 'Cannot be empty'
    else if (!/^.{3,}$/.test(name.trim())) error.name = 'Name so sgithort'
    else if (/^.{12,}$/.test(name.trim())) error.name = 'Name so long'
    else if (!/^[A-Za-z]+$/.test(name)) error.name = 'Symbols are not allowed'

    if (!surname || !surname.trim()) error.surname = 'Cannot be empty'
    else if (!/^.{3,}$/.test(surname.trim())) error.surname = 'Surname so short'
    else if (/^.{12,}$/.test(surname.trim())) error.surname = 'Surname so long'
    else if (!/^[A-Za-z]+$/.test(surname)) error.surname = 'Symbols are not allowed'

    if (!nationality || !nationality.trim()) error.nationality = 'Cannot be empty'
    else if (!/^[A-Za-z]+$/.test(nationality)) error.nationality = 'Symbols are not allowed'


    if (!birthdate) error.birthdate = 'Cannot be empty'
    else {
        const date1: any = new Date(birthdate); // Primera fecha
        const date2: any = new Date(); // Segunda fecha

        const ms = date2 - date1;
        const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

        if (years < 18) error.birthdate = 'You must be of legal age';
        else if (years > 100) error.birthdate = 'Are you alive?';
    }

    if (!description || !description.trim()) error.description = 'Cannot be empty'

    if (!teams) error.teams = 'Select at least one team'

    setError(error);
}