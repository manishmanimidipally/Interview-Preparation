import { COMPANIES_DATA } from '../data/companiesData';

export const companyService = {
  // Get all companies with optional filtering
  getAllCompanies: async (filters = {}) => {
    // In future: return (await apiClient.get('/companies', { params: filters })).data;
    let result = [...COMPANIES_DATA];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.skillsRequired.some(s => s.toLowerCase().includes(q))
      );
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      result = result.filter(c => c.difficulty.toLowerCase() === filters.difficulty.toLowerCase());
    }

    if (filters.category && filters.category !== 'all') {
      result = result.filter(c => c.category === filters.category);
    }

    return result;
  },

  // Get single company by ID or Slug
  getCompanyById: async (idOrSlug) => {
    const company = COMPANIES_DATA.find(
      c => c.id.toLowerCase() === idOrSlug.toLowerCase() || c.slug.toLowerCase() === idOrSlug.toLowerCase()
    );
    return company || null;
  },

  // Get popular companies for landing hero
  getPopularCompanies: async () => {
    return COMPANIES_DATA.slice(0, 6);
  }
};
