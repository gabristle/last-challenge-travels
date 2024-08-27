import Category from "./Category"
import Review from "./Review"
import Tour from "./Tour"

Category.belongsToMany(Tour, { through: 'PostCategory', as: 'posts', foreignKey: 'categoryId'})
Review.belongsTo(Tour, { foreignKey: 'tourId' })
Tour.hasMany(Review, { foreignKey: 'reviewId' })
Tour.belongsToMany(Category, { through: 'PostCategory', as: 'categories', foreignKey: 'postId'})