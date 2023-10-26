import openai
openai.api_key = "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" 
COMPLETION_MODEL = "text-davinci-003"#模型常量
#字符串模版
#描述细节需求,分步去执行，输出格式
prompt = """
Consideration product:工厂现货pvc充气青蛙夜市地摊热卖充气玩具发光蛙儿水上玩具

1。Compose human readable product title used
on Amazon in english within 20 word
2. write 5 selling points for the products in Amazon
3.evaluat a price range for this product in u.s.
output the result in json format with three properties called title,
selling_points and price_range
"""
#定义函数
def get_response(prompt):
    completions = openai.Completion.create(
        engine = COMPLETION_MODEL,
        prompt = prompt,
        max_takens=512,
        n = 1,
        stop = None,
        temperature=0.0 #自由发挥度0-2
    )
    print(completions)
    message = completions.choices[0].text
    return message

print(get_response(prompt))
{
    title:1,
    selling_points:""
    price_range:,
}