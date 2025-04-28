module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { 
      varsIgnorePattern: 'showAddModal|showEditModal|selectedPrescription' 
    }],
    'react/no-unescaped-entities': 'warn',
    '@next/next/no-img-element': 'warn',
  },
};