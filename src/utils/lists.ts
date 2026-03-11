export const imageModules = import.meta.glob<string>(
    '../assets/*.{jpg,jpeg,png,gif,svg}',
    { eager: true, import: 'default' }
)