import openai
openai.api_key="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"
# 常量 文本生成的模型
COMPLETION_MODEL="text-davinci-003"
# 系统后台生成一条记录，再调用我们这个AIGC来生成客服
prompt="请使用朋友的语气回复到用户，并称他为亲，他的订单号已经发货在路上了，预计在3天之内到达，订单号为2021AEDG，我们很抱歉因为天气的原因物流时间比原来长，感谢选购"
# 封装了openai 回复的功能
def get_response(prompt, temperature=1.0):
  completions = openai.Completion.create(
      engine=COMPLETION_MODEL,
      prompt=prompt, 
      max_tokens=1024,
      n=1,
      stop=None,
      temperature=temperature
  )
  message = completions.choices[0].text
  return message
# 客服
- 人工智能的堂客
   NLP
- 人工客服和深度学习客服并存的十五年  
   简单的，重复的，相似的问题
   语义的理解 + 回复的生成更牛


  - pip
      python 包管理器
      pip install  openai
      pip install transformer==0.10.2

     - AIGC 客服
     prompt + LLM
       -python语法
       pip python3
       import openai
       python 弱类型 大写的就是const   
     -前后端数据交互的格式是json  