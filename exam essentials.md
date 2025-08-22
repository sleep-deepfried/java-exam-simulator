## Scope Variables

```java
package org.example;

public class Main {

    public static void main(String args[]) {
       char cool = 'y';

       switch (cool){
           case 'x':
               int kulay = 23;
               break;
           case 'y':
               kulay = 45;
               break;
           case 'w':
               kulay = 65;
               break;
       }
        System.out.println(kulay); // Compilation Error
    }
}

```


## Java Core API
**Stringbuilder**
```java
package org.example;

public class Main {
    public static void main(String args[]) {
        System.out.println("Hello " + new StringBuilder("World"));
    }
}
```
**Output**
- HelloWorld

**Stringbuilder**
```java
package org.example;

public class Main {

    public static void main(String args[]) {
      StringBuilder stringBuilder = new StringBuilder("Hello ");
      System.out.println(stringBuilder.indexOf("the")); // -1

      stringBuilder.append("to the world!");
      System.out.println(stringBuilder.indexOf("the")); // 9
    }
}
```

**Working with Strings**
```java
package org.example;

public class Main {
    
    public static void main(String args[]) {
       String[] movie = {"Star", "Amazing", "World"};
       for(String i: movie){
           i.concat("Wars");
       }

       for(String i: movie){
           System.out.println(i);
       }
    }
}
```
**Lambdas**
```java
package org.example;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Main {

    public static void main(String args[]) {
        String[] names = {"John", "Jane", "Tiu"};
        List lst = Arrays.asList(names);
        Predicate<String> predicate = s ->  s.length() < 3;
        System.out.print(predicate.test("Hello")); // False
    }
}
```

```java
package org.example;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Main {

    public static void main(String args[]) {
        String[] names = {"John", "Jane", "Tiu"};
        List lst = Arrays.asList(names);
        Predicate<String> predicate = s ->  s.length() > 3;

        if(lst.removeIf(predicate)){ // Unsuported Operation
            System.out.println("Removed");
        }
    }
}
```
**Explanation**

The line:

```java
if(lst.removeIf(predicate)){
```

throws an **`UnsupportedOperationException`** because of how the list `lst` is created using:

```java
List lst = Arrays.asList(names);
```

### What's the issue?

`Arrays.asList(names)` **returns a fixed-size list** backed by the original array. This means:

* You can **modify the elements** (e.g., `lst.set(0, "NewName")`).
* But you **cannot add or remove** elements (e.g., `lst.add(...)` or `lst.remove(...)`) — including using `removeIf`.

### Why `removeIf()` fails?

`removeIf(predicate)` attempts to remove elements from the list. But since `Arrays.asList(...)` creates a fixed-size list, the removal operation is **not supported**, leading to:

```
java.lang.UnsupportedOperationException
```

---

### How to fix it?

If you want a fully modifiable list (supports adding/removing), wrap it with a new `ArrayList`:

```java
List<String> lst = new ArrayList<>(Arrays.asList(names));
```

Full fixed version:

```java
import java.util.*;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        String[] names = {"John", "Jane", "Tiu"};
        List<String> lst = new ArrayList<>(Arrays.asList(names));
        Predicate<String> predicate = s -> s.length() > 3;

        if (lst.removeIf(predicate)) {
            System.out.println("Removed");
        }

        System.out.println(lst); // to show remaining elements
    }
}
```



---

## Working Data Types
**Wrapper**
```java
package org.example;

public class Main {
    public Integer foo(Integer value){
        System.out.println("Integer Wrapper");
        return value;
    }

    public long foo(long value){
        System.out.println("Long");
        return value;
    }

    public static void main(String args[]) {
        Main m = new Main();
        System.out.println(m.foo(10));
        System.out.print(m.foo(new Integer(10)));
    }
}
```
---
**Operators**
```java
package org.example;

public class Main {

    public static void main(String args[]) {
       int a = 100; 
       int b = a++; 
       int c = ++a; 

       System.out.println(a); // 102
       System.out.println(b); // 100
       System.out.println(c); // 102
    }
}
```
**Decalare and Initialize Variables**
```java
package org.example;

public class Main {

    public static void main(String args[]) {
        int value  = 10;
        float x  = (float) value; // Valid Explicit
        System.out.println(x);
    }
}
```

**import package**

```java

package two;

public class A {
    public int x = 10;

    public A(int x) {
        this.x = x;
    }
}


package org.example.Three;

// Import

public class B {
    A a = new A(10);
}



package org.example;

import org.example.Three.B; // Import here
import two.A; // Import here

public class Main {

    public static void main(String args[]) {
        A a = new A();
        B b = new B();
    }
}

```



---
## Looping

```java
package org.example;

public class Main {

    public static void main(String args[]) {
       int a = 100;

       while(a == 100 | a > 10){ // Working code
           System.out.println("true");
       }
    }
}
```

---
## Creating and Using of Arrays

```java
package org.example;

import java.util.Arrays;

public class Main {

    public static void main(String args[]) {
        int[] arr = {10,20,30,40};
        int[] arr2 = {50,60,70};
        arr = arr2;

        System.out.println(Arrays.toString(arr));
    }
}
```
---
## Methods and Encapsulation

```java
package org.example;

import java.util.Arrays;
class Bank{
    int amount;

    public Bank(int amount){
        this.amount = amount;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void updateAmount(int amount){
        this.amount += amount;
    }

}


public class Main {

    public static void main(String args[]) {
        Bank bank = new Bank(500);
//        bank.amount = 0;
//        bank.setAmount(0);
//        bank.updateAmount(-bank.getAmount());
        System.out.println(bank.amount);
    }
}
```



```java
package org.example;

public class Main {

    public static void main(String args[]) {
        Object obj = new Object();
        Object obj1 = new Object();
        Object obj2 = null;
        
        // How many object is created?
    }
}
```

```java
package two;

public class A {
    public int m1 = 10;
    private int m2 = 20;
    protected int m3 = 40;
    int m4 = 50;
}

// Which of the following instance variables can use in the Main
package org.example;

import two.A;

public class Main {

    public static void main(String args[]) {
       A a = new A();

    }
}
```



```java
package two;

public class A {
    public static int m1 = 10;
    private static int m2 = 20;
    protected static int m3 = 40;
    static int m4 = 50;
}

// Which of the following static methods can use in the main method
package org.example;

import two.A;

public class Main extends A{

    public static void main(String args[]) {
        System.out.println(m1);
        System.out.println(m2); // Wrong
        System.out.println(m3);
        System.out.println(m4); // Wrong

    }
}
```

```java
package org.example;

class Base{
    void print(){
        System.out.println("Base");
    }
}

class DerivedA extends Base{
    void print() {
       System.out.print("Derived A");

    }
}

class DerivedB extends DerivedA{
    void print() {
        System.out.println("Derived B");
    }
}


public class Main extends Base{

    void print() {
        System.out.println("Derived C");
    }

    public static void main(String args[]) {
        Base b1 = new DerivedA();
        Base b2 = new DerivedB();
        Base b3 = new Main();
        b3 = (Base) b1;
        b3.print(); // DerivedA

        b1 = (Base) b2;// Working
        b1.print(); // Derived B
    }
}
```

```java
package org.example;

public class Main{
    static int x;
    int y;

    public static void main(String args[]) {
        Main m = new Main();
        Main m1 = new Main();
        m.x = 10;
        m.y = 20;
        m1.y = 15;
        m.x = 100;

        System.out.println(m.x); // 100
        System.out.println(m.y); // 20
        System.out.println(m1.x); // 100
        System.out.println(m1.y); // 15
    }
}
```

```java
package org.example;

public class Main{
    int x;
    int y;

    Main(){}

    Main(int x, int y){
        x = x;
        y = this.y;
    }

    public static void main(String args[]) {
        Main m = new Main();
        m.x = 10;
        m.y = 20;

        Main m1 = new Main(m.x,m.y);

        System.out.println(m.x);
        System.out.println(m.y);
        System.out.println(m1.x);
        System.out.println(m1.y);
    }
}   
```

```java
package org.example;

public class Main{

    public static void main(String args[]) {
        Integer sum = 10 + 20;
        String value = (String) sum;
        System.out.println(value);
    }
}
```
---
Which of the following will be output `****` do while loop choices

---
```java
public class Main{

    static boolean checkCondition(int i) {
        // Ternary operator returns true if value > 0, else false
        return (--i > 0) ? true : false;
    }

    public static void main(String args[]) {
        int i = 6;
        while (checkCondition(i)) {
            System.out.print(i);
        }
    }
}
```

---

**Iterator (Surprised Question Basic)**


---

## ✅ 1. **Can `Error` be extended in Java?**

> **A.** Yes
> **B.** No
> **C.** Only if it's final
> **D.** Only in the JVM

**✅ Correct Answer:** A
**💡 Explanation:** `Error` is not `final`, so it can be extended — but it’s not recommended for application code.

---

## ✅ 2. **Which of the following is true about `java.lang.Error`?**

> **A.** It is a checked exception
> **B.** It must be declared with `throws`
> **C.** It extends `Throwable`
> **D.** It should be caught and handled in user applications

**✅ Correct Answer:** C
**💡 Explanation:** `Error` extends `Throwable` directly. It is **unchecked**, and **should not** be caught normally.

---

## ✅ 3. **Which is an example of a subclass of `Error`?**

> **A.** `NullPointerException`
> **B.** `IOException`
> **C.** `OutOfMemoryError`
> **D.** `IllegalArgumentException`

**✅ Correct Answer:** C
**💡 Explanation:** `OutOfMemoryError` is a subclass of `Error`. The others are `Exception` types.

---

## ✅ 4. **What is the best practice for creating application-specific problems?**

> **A.** Extend `Error`
> **B.** Extend `Throwable`
> **C.** Extend `RuntimeException`
> **D.** Use `assert`

**✅ Correct Answer:** C
**💡 Explanation:** Application-level problems should extend `RuntimeException` or `Exception`, not `Error`.

---

## ✅ 5. **What happens if a method throws an `Error`?**

> **A.** It must be declared with `throws`
> **B.** It must be caught in a try block
> **C.** It may cause the program to terminate
> **D.** It causes a compilation error

**✅ Correct Answer:** C
**💡 Explanation:** `Error`s like `StackOverflowError` or `OutOfMemoryError` are fatal — catching them is rare and discouraged.

---

## ✅ Question 1: Checked Exception Rules

**Statement I:** All checked exceptions must be either caught or declared.
**Statement II:** A method that throws `IOException` must declare it or handle it.
**Statement III:** All exceptions that extend `Throwable` are checked exceptions.

> **What is the correct answer?**
> A. Only Statements I and II are true
> B. Only Statement III is true
> C. All statements are true
> D. Only Statements II and III are true

**✅ Correct Answer:** A

**💡 Explanation:**

* ✔️ **Statement I:** True — required by compiler.
* ✔️ **Statement II:** True — `IOException` is a classic checked exception.
* ❌ **Statement III:** False — `RuntimeException` and `Error` also extend `Throwable`, but are **unchecked**.

---

## ✅ Question 2: Compilation Behavior

**Statement I:** A method that does not handle a checked exception and does not declare it will not compile.
**Statement II:** A method that throws a `RuntimeException` must declare it.
**Statement III:** `FileNotFoundException` is a checked exception.

> A. All statements are true
> B. Only Statement I and III are true
> C. Only Statement II and III are true
> D. Only Statement I is true

**✅ Correct Answer:** B

**💡 Explanation:**

* ✔️ **Statement I:** True — compiler error if not declared or caught.
* ❌ **Statement II:** False — `RuntimeException` is unchecked, no `throws` needed.
* ✔️ **Statement III:** True — it's a subclass of `IOException`.

---

## ✅ Question 3: try-catch-finally

**Statement I:** `finally` block always executes unless `System.exit()` is called.
**Statement II:** A checked exception can be thrown without being declared, as long as it's caught.
**Statement III:** Multiple `catch` blocks can be used for a single `try` block.

> A. All statements are true
> B. Only Statements I and II are true
> C. Only Statements I and III are true
> D. Only Statement III is true

**✅ Correct Answer:** A

**💡 Explanation:**

* ✔️ **Statement I:** True — `finally` executes unless JVM exits first.
* ✔️ **Statement II:** True — if caught inside the method, no need to declare.
* ✔️ **Statement III:** True — `catch` blocks can be chained for different exception types.

---

## ✅ Question 4: Exception Class Hierarchy

**Statement I:** `Exception` is a subclass of `Throwable`.
**Statement II:** `RuntimeException` is a subclass of `Exception`.
**Statement III:** All subclasses of `Exception` are checked exceptions.

> A. All statements are true
> B. Only I and II are true
> C. Only II and III are true
> D. Only Statement III is false

**✅ Correct Answer:** B or D (same meaning)

**💡 Explanation:**

* ✔️ **Statement I:** True
* ✔️ **Statement II:** True
* ❌ **Statement III:** False — subclasses of `RuntimeException` are **unchecked**.

---

**Inheritance**

```java
// Base interface
interface Movable {
    void move();
}

// Extended interface
interface Flyable extends Movable {
    void fly();
}

// Abstract class implementing the extended interface
abstract class Bird implements Flyable {
    // Implement move() from Movable
    public void move() {
        System.out.println("Bird moves by hopping or flying.");
    }

    // Leave fly() unimplemented (still abstract)
    // So the class remains abstract
}

// Concrete class extending the abstract class
class Eagle extends Bird {
    // Implement fly() from Flyable
    public void fly() {
        System.out.println("Eagle flies high.");
    }
}

// Main class to test the structure
public class Main {
    public static void main(String[] args) {
        Eagle eagle = new Eagle();
        eagle.move();  // from Bird
        eagle.fly();   // from Eagle
    }
}
```
---
this()
super()
---
**Switch**

```java
public class Main {
    public static void main(String[] args) {
        String[] arr = {"A", "B", "C", "D"};

        for (String item : arr) {
            switch (item) {
                case "A":
                    System.out.print("1");
                    break;
                case "B":
                    System.out.print("2");
                    break;
                case "C":
                    System.out.print("3");
                    break;
                default:
                    System.out.print("X");
            }
        }
    }
}
```
---
**ArrrayList**

```java
package org.example;

import java.util.ArrayList;

public class Main{

    public static void main(String args[]) {
        ArrayList<String> colors = new ArrayList<>();
        colors.add("Red");
        colors.add("Green");
        colors.add("Orange");
        colors.remove(2);
        colors.add("Yellow");
        colors.add(2,"Blue");
        System.out.println(colors);
    }
}
```
---
**Date Time**
```java
package org.example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main{

    public static void main(String args[]) {
        LocalDateTime birthdayParty = LocalDateTime.of(2024, 7, 10, 18, 30);
        birthdayParty.plusDays(3);
        String isoFormat = birthdayParty.format(DateTimeFormatter.ISO_DATE_TIME);
        System.out.println(isoFormat); 
    }
}
```
---

javac, java

---

**Compilation Error**
```java
package org.example;

public class Main{
    static int x = 10;

    public static void main(String args[]) {
        int a, b, c;
        if(x == 10){
            a = 20;
            b = 10;
            c = 20;
        }
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
```
---
**Control Structures**
```java
package org.example;

public class Main{
    public static void main(String args[]) {
       int x = 10;
       if(x++ == 11){
           System.out.println("Hello World" + x);
       }else{
           System.out.println("Hello Universe" + x);
       }
    }
}
```
---

**Concatenation**
```java
public class Main{

    public static void main(String args[]) {
        System.out.println("Hello World" + (1 + 2));
        System.out.println("Gcash FECP5" + (1) + (2));
    }
}
```






