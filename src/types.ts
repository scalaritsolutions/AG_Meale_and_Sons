export interface SeasonalItem {
  id: string;
  name: string;
  status: 'picking' | 'coming-soon';
  month: string;
  image: string;
}

export interface Plant {
  id: string;
  name: string;
  category: 'Shade' | 'Sun' | 'Pollinator';
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
