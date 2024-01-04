export interface Property {
  error:      string;
  data:       Data;
  count:      string;
  status:     number;
  statusText: string;
}

export interface Data {
  id:                             string;
  state:                          string;
  address:                        string;
  country:                        string;
  title:                          string;
  currency:                       string;
  email:                          string;
  city:                           string;
  is_active:                      boolean;
  phone:                          string;
  min_stay_type:                  string;
  logo_url:                       string;
  default_cancellation_policy_id: string;
  hotel_policy_id:                string;
  acc_channels_count:             number;
  default_tax_set_id:             string;
  latitude:                       string;
  location_precision:             number;
  longitude:                      string;
  property_type:                  string;
  timezone:                       string;
  website:                        string;
  zip_code:                       string;
  property_category:              string;
}
