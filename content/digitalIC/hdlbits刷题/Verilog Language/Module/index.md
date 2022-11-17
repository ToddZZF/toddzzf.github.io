---
title: 模块
date: 2022-11-17 20:43:00 +0800
---

## Module

多个小模块可以组合成更大的模块。比如假设有如下一个模块：

```verilog
module mod_a ( input in1, input in2, output out );
    // Module body
endmodule
```

可以通过将信号连接到模块端口的名字或位置，来使用模块：

- 通过模块端口的位置（即定义时的位置）
  
  ```verilog
  mod_a instance1 ( wa, wb, wc );
  ```

- 通过模块端口的名称

  ```verilog
  mod_a instance2 ( .out(wc), .in1(wa), .in2(wb) );
  ```

### 问题20

- 题目：

  ![Module](images/Module.png)

```verilog
module top_module ( input a, input b, output out );

    mod_a instance1(a,b,out);
    // mod_a instance2 (.in1(a), .in2(b), .out(out));
    
endmodule
```

![问题20-testbench](images/问题20-testbench.png)

### 问题21

- 题目：You are given the following module:

  ```verilog
  module mod_a ( output, output, input, input, input, input );
  ```

  ![Module_pos](images/Module_pos.png)

```verilog
module top_module ( 
    input a, 
    input b, 
    input c,
    input d,
    output out1,
    output out2
);

    mod_a instance1(out1,out2,a,b,c,d);

endmodule
```

![问题21-testbench](images/问题21-testbench.png)


### 问题22

- 题目：

  ![Module_pos](images/Module_pos.png)

```verilog
module top_module ( 
    input a, 
    input b, 
    input c,
    input d,
    output out1,
    output out2
);
    
    mod_a instance1(.in1(a), .in2(b), .in3(c), .in4(d), .out1(out1), .out2(out2));

endmodule
```

![问题22-testbench](images/问题22-testbench.png)

### 问题23

- 题目：You are given a module my_dff with two inputs and one output (that implements a D flip-flop). Instantiate three of them, then chain them together to make a shift register of length 3. The clk port needs to be connected to all instances.

  The module provided to you is: `module my_dff ( input clk, input d, output q );`

![Module_shift](images/Module_shift.png)

```verilog
module top_module ( input clk, input d, output q );
    
    wire q1,q2;
    my_dff instance1(clk, d, q1);
    my_dff instance2(clk, q1, q2);
    my_dff instance3(clk, q2, q);

endmodule
```

![问题23-testbench](images/问题23-testbench.png)

### 问题24

