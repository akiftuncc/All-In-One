red = [1,2,3,4,5,6,7,8]
blue = [9,10,11,12,13,14,15,16]
green = [17,18,19,20,21,22,23,24]

print("çıkış yapmak için q ya bas")
while True:
    print("kırmızı 1->1 / 2->2 / 3->3 / 4->4 / 5->5 / 6->6 / 7->7 / 8->8")
    print("mavi 1->9 / 2->10 / 3->11 / 4->12 / 5->13 / 6->14 / 7->15 / 8->16")
    print("yeşil 1->17 / 2->18 / 3->19 / 4->20 / 5->21 / 6->22 / 7->23 / 8->24")
    red_temp = red
    blue_temp = blue
    green_temp = green
    while True:
        list_len = len(red_temp)+len(blue_temp)+len(green_temp)
        inp = input("input: ")
        if inp == "q":
            print("next case")
            break
        else:
            inp = int(inp)
        if inp >16:
            index = inp % 17
            green_temp[index] = "X"
        elif inp >8:
            index = inp % 9
            blue_temp[index] = "X"
        else:
            index = inp-1
            red_temp[index] = "X"
        print("|Kırmızı\t\t|Mavi\t\t|Yeşil")
        for i in range(8):
            print(f"|{red_temp[i]}\t\t\t|{blue_temp[i]%9}\t\t\t|{green_temp[i]%16}")


