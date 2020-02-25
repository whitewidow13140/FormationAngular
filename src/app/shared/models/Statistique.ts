import {Appreciation} from './Appreciation';

export class Statistique {
    private id: string;
    private intitule: string;
    private valeur: string;
    private icone: string;
    private appreciation: Appreciation;
    private dateDernierRefresh: Date;

    constructor(id: string, intitule: string, valeur: string, icone: string, appreciation: Appreciation) {
        this.id = id;
        this.intitule = intitule;
        this.valeur = valeur;
        this.icone = icone;
        this.appreciation = appreciation;
        this.dateDernierRefresh = new Date();
    }

    getId(): string {
        return this.id;
    }
    
    getIntitule(): string {
        return this.intitule;
    }

    setIntitule(intitule: string) {
        this.intitule = intitule;
        this.dateDernierRefresh = new Date();
    }
    
    getValeur(): string {
        return this.valeur;
    }

    setValeur(valeur: string) {
        this.valeur = valeur;
        this.dateDernierRefresh = new Date();
    }

    getIcone(): string {
        return this.icone;
    }

    setIcone(icone: string) {
        this.icone = icone;
    }

    getAppreciation(): Appreciation {
        return this.appreciation;
    }

    setAppreciation(appreciation: Appreciation) {
        this.appreciation = appreciation;
        this.dateDernierRefresh = new Date();
    }

    getDateDernierRefresh(): Date {
        return this.dateDernierRefresh;
    }

}