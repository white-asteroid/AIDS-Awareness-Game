class A:
    def __init__(self, classavar):
        self.classavar = classavar
    classavar = None


class B(A):
    def __init__(self, classbvar, classavar):
        self.classavar = classavar
        self.classbvar = classbvar

    classbvar = "B"


class C(A):
    def __init__(self, classcvar, classavar):
        self.classavar = classavar
        self.classcvar = classcvar
        # A("A from C")

    classcvar = "C"


class D(B, C):
    def __init__(self, classdvar, classbvar, classcvar):
        self.classdvar = classdvar
        self.classbvar = classbvar
        self.classcvar = classcvar

    def printall(self):
        print(super.classavar )


# https://www.interviewbit.com/python-interview-questions/#what-is-python-what-are-the-benefits-of-using-python

