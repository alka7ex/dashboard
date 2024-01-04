export interface Meta {
  error:      string;
  data:       Data;
  count:      string;
  status:     string;
  statusText: string;
}

export interface Data {
  id:              string;
  purchased_price: number;
  created_at:      Date;
  profiles:        Profiles;
  property:  PropertyTable;
}

export interface Profiles {
  id:        string;
  full_name: string;
  phone:     string;
  email:     string;
  city:      string;
}

export interface PropertyTable {
  property_id: string;
  title:       string;
  address:     string;
  zip_code:    string;
  state:       string;
  country:     string;
}
