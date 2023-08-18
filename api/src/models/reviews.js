
  const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    transaction: { type: Schema.Types.ObjectId, ref: 'Purchase', required: true }, 
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    
  });
  

  const Review = mongoose.model('Review', reviewSchema);
