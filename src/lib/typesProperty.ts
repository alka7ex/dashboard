interface Property {
  data: {
    attributes: Attributes;
    id: string;
    type: string;
    relationships: Relationships;
  };
}

interface Attributes {
  id: string;
  state: string;
  address: string;
  country: string;
  title: string;
  currency: string;
  content: Content;
  email: string;
  city: string;
  settings: Settings;
  is_active: boolean;
  phone: string;
  min_stay_type: string;
  logo_url: string;
  default_cancellation_policy_id: string;
  hotel_policy_id: string;
  acc_channels_count: number;
  default_tax_set_id: null | string;
  latitude: string;
  location_precision: number;
  longitude: string;
  property_type: string;
  timezone: string;
  website: string;
  zip_code: string;
  property_category: string;
}

interface Relationships {
  users: { data: User[] };
  groups: { data: Group[] };
  facilities: { data: Facility[] };
  hotel_policies: { data: HotelPolicy[] };
  cancellation_policies: { data: CancellationPolicy[] };
  tax_sets: { data: TaxSet[] };
}

interface Content {
  description: string;
  photos: Photo[];
  important_information: string;
}

interface Photo {
  id: string;
  position: number;
  description: string;
  author: string;
  kind: string;
  url: string;
  property_id: string;
  room_type_id: null | string;
}

interface Settings {
  min_stay_type: string;
  allow_availability_autoupdate: boolean;
  allow_availability_autoupdate_on_cancellation: boolean;
  allow_availability_autoupdate_on_confirmation: boolean;
  allow_availability_autoupdate_on_modification: boolean;
  cut_off_days: null | number;
  cut_off_time: null | string;
  max_price: string;
  min_price: string;
  state_length: number;
}

interface User {
  data: UserData[];
}

interface UserData {
  attributes: UserAttributes;
  id: string;
  type: string;
}

interface UserAttributes {
  id: string;
  name: string;
  email: string;
}



interface GroupAttributes {
  id: string;
  title: string;
}

interface GroupData {
  attributes: GroupAttributes;
  id: string;
  type: string;
}

interface Group {
  data: GroupData[];
}

interface Facility {
  data: FacilityData[];
}

interface FacilityData {
  attributes: FacilityAttributes;
  id: string;
  type: string;
}
interface FacilityAttributes {
  id: string;
  title: string;
  category: string;
}





interface HotelPolicyAttributes {
  id: string;
  title: string;
}

interface HotelPolicyData {
  attributes: HotelPolicyAttributes;
  id: string;
  type: string;
}

interface HotelPolicy {
  data: HotelPolicyData[];
}

interface CancellationPolicyAttributes {
  id: string;
  title: string;
}

interface CancellationPolicyData {
  attributes: CancellationPolicyAttributes;
  id: string;
  type: string;
}

interface CancellationPolicy {
  data: CancellationPolicyData[];
}

interface TaxSetAttributes {
  id: string;
  title: string;
}

interface TaxSetData {
  attributes: TaxSetAttributes;
  id: string;
  type: string;
}

interface TaxSet {
  data: TaxSetData[];
}

