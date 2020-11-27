export interface apiFormat {
    apiKey: string;
}

export interface countryFormat {
    code: string,
    name: string;
    flag: string;
}

export interface newsFormat {
    source: string;
    author: string;
    title: string;
    description: string;
    url: string;
    image: string;
    publish: string;
    content: string
}