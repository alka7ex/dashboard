export interface Meta {
  error:      null;
  data:       Data;
  count:      null;
  status:     number;
  statusText: string;
}

export interface Data {
  id:              string;
  purchased_price: number;
  created_at:      Date;
  profiles:        Profiles;
  property_table:  PropertyTable;
}

export interface Profiles {
  id:        string;
  full_name: string;
  phone:     string;
  email:     string;
  city:      null;
}

export interface PropertyTable {
  property_id: string;
  title:       string;
  address:     string;
  zip_code:    null;
  state:       null;
  country:     null;
}
