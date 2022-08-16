import cmath
a=1
b=4
c=9

#calculation
x=(b**2)-(4*a*c)

#for finding solution
y=(-b-cmath.sqrt(x))/(2*a)
z=(-b+cmath.sqrt(x))/(2*a)

#to print the solution
print('the solution {0} and {1}'.format(y,z))