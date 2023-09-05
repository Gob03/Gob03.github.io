// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Test {
    business: Business;
    menu:     Menu;
}

export interface Business {
    id:            number;
    working_hours: WorkingHour[];
    locations:     Location[];
    name:          string;
    slogan:        string;
    image:         string;
    phone:         string;
    mobile:        string;
    email:         string;
    address:       string;
    urlFacebook:   string;
    urlTwitter:    string;
    urlInstagram:  string;
    urlWeb:        string;
}

export interface Location {
    id:             number;
    name:           string;
    ongoing_orders: boolean;
}

export interface WorkingHour {
    id:             number;
    week_day:       number;
    short_day_name: string;
    large_day_name: string;
    schedules:      Schedule[];
}

export interface Schedule {
    id:        number;
    from_hour: string;
    to_hour:   string;
}

export interface Menu {
    id:         number;
    name:       string;
    categories: Category[];
}

export interface Category {
    id:                    number;
    name:                  string;
    weight:                number;
    products:              Product[];
    menus_with_categories: number[];
}

export interface Product {
    id:               number;
    product:          number | null;
    name:             string;
    price:            number;
    image:            string;
    description:      string;
    available:        boolean;
    elaboration:      boolean;
    vegetarian:       boolean;
    vegan:            boolean;
    gluten_free:      boolean;
    destination:      Destination;
    elaboration_cost: number;
    cooking_time:     number;
    client_points:    number;
    in_stock:         boolean;
    has_aggregates:   boolean;
}

export enum Destination {
    Barra = "Barra",
}