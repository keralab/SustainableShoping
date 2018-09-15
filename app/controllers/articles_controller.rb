class ArticlesController < ApplicationController
  def new
  end

  def create
    @article = Article.new(params[:article])
    # render plain: params[:article].inspect
    @article.save
    retiderct_to @article
  end

end
