get "/" do
	puts "[LOG] Getting /"
	puts "[LOG] Params: #{params.inspect}"
	@urls = Url.all
  erb :"static/index"
end

post '/urls' do
	Url.create(long_url: params[:long_url])
	redirect "/"
end

get '/:short_url' do
 url = Url.find_by short_url: params[:short_url]
	Url.increment_counter(:click_count, url.id)
	redirect url.long_url 
end