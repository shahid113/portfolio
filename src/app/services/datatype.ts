
export interface experience {
    job:string,
    company:string,
    duration:string,
    techStack:string,
    id:number,
    img:string
}


export interface education {
    degree:string,
    university:string,
    cgpa:number,
    id:number

}

export interface projects{
    projectName:string,
    duration:string,
    description:string,
    link:string|undefined,
    id:number
}

export interface skills{
    id:number,
    name:string,
    img:string
}