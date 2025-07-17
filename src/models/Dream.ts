export interface Dream {
    id: number,
    name: string,
    theme: string,
    checked: boolean
}

export const themes = [
    {value: "teknik", label: "teknikdrömmar"},
    {value: "vardag", label: "vardagsdrömmar"},
    {value: "hus", label: "husdrömmar"},
    {value: "sport", label: "sportdrömmar"},
    {value: "res", label: "resdrömmar"}
];

export let name = "NAMN";

export const dreams: Dream[] = [{
    id: 1,
    name: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true
},
{
    id: 2,
    name: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false
},
{
    id: 3,
    name: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false
}
]